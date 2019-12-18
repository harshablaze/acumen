from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from tabula import convert_into,read_pdf
import pandas as pd
import numpy as np
import re, json
# Create your views here.

def createObj(ip1,res):
    v = {}
    itera = 0
    for value in ip1:
        if isinstance(res[itera],str) :
            if "F" in res[itera] :
                res[itera] = "F"
        v[value] = res[itera]
        itera+=1
    return v


def decoder(fileupd):
    # data = fileupd.read()
    df = read_pdf(fileupd,spreadsheet=True,stream=True,multiple_tables=True,pages="all",guess=False)
    cnt = 0
    branch = [[],[],[],[],[],[],[],[]]
    branchsubs = [[],[],[],[],[],[],[],[]]
    grade = {
        "O":100,
        "A+":95,
        "A":85,
        "B+":75,
        "B":65,
        "C":55,
        "P":45,
        "F":float("nan"),
    }

    for i in range(len(df)):
        res = np.array(df[i])
        res[0][0], res[0][1], res[0][2] = 'Rollno', 'SGPA', 'CGPA'
        res = np.delete(res,1,0)
        res = np.delete(res,1,0)
        cols = len(res[0])
        if(res[1][len(res[1])-1]!=res[1][len(res[1])-1]):
            res = np.delete(res,cols-1,1)
        
        if(re.match("3+.+.+126510+.+.+.",res[1][0])!=None) :
            branchsubs[2] = res[0]
        elif(re.match("3+.+.+126502+.+.+.",res[1][0])!=None) :
            branchsubs[0] = res[0]
        elif(re.match("3+.+.+126508+.+.+.",res[1][0])!=None) :
            branchsubs[1] = res[0]
        elif(re.match("3+.+.+126511+.+.+.",res[1][0])!=None) :
            branchsubs[3] = res[0]
        elif(re.match("3+.+.+126512+.+.+.",res[1][0])!=None) :
            branchsubs[4] = res[0]
        elif(re.match("3+.+.+126514+.+.+.",res[1][0])!=None) :
            branchsubs[5] = res[0]
        elif(re.match("3+.+.+126520+.+.+.",res[1][0])!=None) :
            branchsubs[6] = res[0]
        # 126502(Chem)0
        # 126508(CIV)1
        # 126510(CSE)2
        # 126511(IT)3
        # 126512(ECE)4
        # 126514(EEE)5
        # 126520(MECH)6
        for k in range(len(res[1])):
            if isinstance(res[1][k],str):
                res[1][k] = res[1][k].strip('e\r')
        for j in range(1,len(res)):
            if isinstance(res[j][0],str):
                # if(("3171" in res[j][0]) or ("3181" in res[j][0]) or ("3161" in res[j][0])):
                if(re.match("3+.+.+126510+.+.+.",res[j][0])!=None):
                    cnt+=1
                    branch[2].append(createObj(res[0],res[j]))
                elif(re.match("3+.+.+126502+.+.+.",res[1][0])!=None) :
                    cnt+=1
                    branch[0].append(createObj(res[0],res[j]))
                elif(re.match("3+.+.+126508+.+.+.",res[1][0])!=None) :
                    cnt+=1
                    branch[1].append(createObj(res[0],res[j]))
                elif(re.match("3+.+.+126511+.+.+.",res[1][0])!=None) :
                    cnt+=1
                    branch[3].append(createObj(res[0],res[j]))
                elif(re.match("3+.+.+126512+.+.+.",res[1][0])!=None) :
                    cnt+=1
                    branch[4].append(createObj(res[0],res[j]))
                elif(re.match("3+.+.+126514+.+.+.",res[1][0])!=None) :
                    cnt+=1
                    branch[5].append(createObj(res[0],res[j]))
                elif(re.match("3+.+.+126520+.+.+.",res[1][0])!=None) :
                    cnt+=1
                    branch[6].append(createObj(res[0],res[j]))

    branchdf=[]
    for data in branch :
        bdf = pd.DataFrame(data)
        bdf.columns = bdf.columns.str.replace('&', '')
        bdf.columns = bdf.columns.str.replace('-', '')
        bdf.columns = bdf.columns.str.replace(' ', '')
        branchdf.append(bdf)

    cse={}
    cse["a"] = branchdf[2].loc[branchdf[2].iloc[:,0].str.contains(r'3..1265..((0(([0-5][0-9])|(60)))|(L((0[0-9])|1[012])))')]
    cse["b"] = branchdf[2].loc[branchdf[2].iloc[:,0].str.contains(r'3..1265..((0((6[1-9])|([7-9][0-9])))|(1(([0-1][0-9])|(20))))|(L((1[3-9])|2[0-4]))')]
    cse["c"] = branchdf[2].loc[branchdf[2].iloc[:,0].str.contains(r'3..1265..((1((2[1-9])|([3-8][0-9]))))|(L((2[5-9])|[34][0-9]))')]
    resp = {}
    resp["secdata"] = {}
    resp["classdata"] = {}
    resp["classdata"]["subjects"] = []
    for section in cse:
        secdata = {}
        totalno = cse[section].Rollno.count()
        secdata["section"] = section
        secdata["total"] = int(totalno)
        secdata["subjects"] = []
        # resp.append("section : "+section+", total: ("+str(totalno)+")\n")
        for subject in cse[section].columns[3:]:
            subj = {}
            subj["name"] = subject
            subj["failcnt"] = int(cse[section].query(subject+' =="F"')[subject].count())
            subj["passcnt"] = int(totalno-subj["failcnt"])
            subj["passper"] = round((subj["passcnt"]/totalno)*100,2)
            secdata["subjects"].append(subj)
            # resp.append(subject+" : "+str(round(((totalno-cse[section].query(subject+' =="F"')[subject].count())/cse[section].Rollno.count())*100,2))+", count: "+str(totalno-cse[section].query(subject+' =="F"')[subject].count())+"\n")
        # print("\n")
        resp["secdata"][section] = secdata
    resp["classdata"]["total"] = int(branchdf[2].Rollno.count())
    for subject in branchdf[2].columns[3:]:
        subj = {}
        subj["name"] = subject
        subj["totalno"] = resp["classdata"]["total"]
        subj["failcnt"] = int(branchdf[2].query(subject+' =="F"')[subject].count())
        subj["passcnt"] = int(subj["totalno"]-subj["failcnt"])
        subj["passper"] = round((subj["passcnt"]/subj["totalno"])*100,2)
        resp["classdata"]["subjects"].append(subj)
    resp["classdata"]["semfail"] = resp["classdata"]["total"] - int(branchdf[2].SGPA.count())
    resp["classdata"]["overallfail"] = resp["classdata"]["total"] - int(branchdf[2].CGPA.count())
    
    return resp
    


@csrf_exempt
def index(request):
    if(request.method == 'POST') :
        fileup = request.FILES["pdffile"]
        # data = fileup.read()
        try:
            return JsonResponse(decoder(fileup),safe=False)
        except:
            return JsonResponse({"error":True},safe=False)
    return HttpResponse("Hello")