from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from tabula import convert_into,read_pdf
import pandas as pd
import mysql.connector
import numpy as np
import re, json
# Create your views here.

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="",
  database="acumen"
)
# print(mydb)
# mycursor = mydb.cursor()

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

def df_column_uniquify(df):
    df_columns = df.columns
    new_columns = []
    for item in df_columns:
        counter = 0
        newitem = item
        while newitem in new_columns:
            counter += 1
            newitem = "{}_{}".format(item, counter)
        new_columns.append(newitem)
    df.columns = new_columns
    return df

def decoder(fileupd):
    # data = fileupd.read()
    df = read_pdf(fileupd,spreadsheet=True,stream=True,multiple_tables=True,pages="all",guess=False)
    # df = df_column_uniquify(df)
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
                if(re.match("3..126510...",res[j][0])!=None):
                    cnt+=1
                    branch[2].append(createObj(res[0],res[j]))
                elif(re.match("3..126502...",res[1][0])!=None) :
                    cnt+=1
                    branch[0].append(createObj(res[0],res[j]))
                elif(re.match("3..126508...",res[1][0])!=None) :
                    cnt+=1
                    branch[1].append(createObj(res[0],res[j]))
                elif(re.match("3..126511...",res[1][0])!=None) :
                    cnt+=1
                    branch[3].append(createObj(res[0],res[j]))
                elif(re.match("3..126512...",res[1][0])!=None) :
                    cnt+=1
                    branch[4].append(createObj(res[0],res[j]))
                elif(re.match("3..126514...",res[1][0])!=None) :
                    cnt+=1
                    branch[5].append(createObj(res[0],res[j]))
                elif(re.match("3..126520...",res[1][0])!=None) :
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
    cse["A"] = branchdf[2].loc[branchdf[2].iloc[:,0].str.contains(r'3..1265..((0(([0-5][0-9])|(60)))|(L((0[0-9])|1[012])))')]
    cse["B"] = branchdf[2].loc[branchdf[2].iloc[:,0].str.contains(r'3..1265..((0((6[1-9])|([7-9][0-9])))|(1(([0-1][0-9])|(20))))|(L((1[3-9])|2[0-4]))')]
    cse["C"] = branchdf[2].loc[branchdf[2].iloc[:,0].str.contains(r'3..1265..((1((2[1-9])|([3-8][0-9]))))|(L((2[5-9])|[34][0-9]))')]
    resp = {}
    resp["secdata"] = []
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
            subj["grades"] = {}
            subj["subcnt"] = 0
            for gra in grade.keys():
                subj["grades"][gra] = int(cse[section].query(subject+' =="'+gra+'"')[subject].count())
                subj["subcnt"] += subj["grades"][gra]
            subj["failcnt"] = int(cse[section].query(subject+' =="F"')[subject].count())
            subj["passcnt"] = int(subj["subcnt"]-subj["failcnt"])
            subj["passper"] = round((subj["passcnt"]/subj["subcnt"])*100,2)
            secdata["subjects"].append(subj)
            # resp.append(subject+" : "+str(round(((totalno-cse[section].query(subject+' =="F"')[subject].count())/cse[section].Rollno.count())*100,2))+", count: "+str(totalno-cse[section].query(subject+' =="F"')[subject].count())+"\n")
        # print("\n")
        secdata["semfail"] = secdata["total"] - int(cse[section].SGPA.count())
        secdata["passcnt"] = int(cse[section].SGPA.count())
        secdata["passper"] = round((secdata["passcnt"]/totalno)*100,2)
        secdata["overallfail"] = secdata["total"] - int(cse[section].CGPA.count())
        resp["secdata"].append(secdata)
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
    resp["classdata"]["passcnt"] = int(branchdf[2].SGPA.count())
    resp["classdata"]["passper"] = round((resp["classdata"]["passcnt"]/int(branchdf[2].Rollno.count()))*100,2)
    resp["classdata"]["overallfail"] = resp["classdata"]["total"] - int(branchdf[2].CGPA.count())
    resp["error"] = False
    return resp
    


@csrf_exempt
def index(request):
    if(request.method == 'POST') :
        fileup = request.FILES["pdffile"]
        # data = fileup.read()
        try:
            data = decoder(fileup)
            mycursor = mydb.cursor()
            sql = "INSERT INTO `results`(`batch`, `year`, `sem`, `data`) VALUES (%s,%s,%s,%s)"
            # print(request.POST['batch'],request.POST['year'],request.POST['sem'],data)
            val = (request.POST['batch'],request.POST['year'],request.POST['sem'],json.dumps(data))
            mycursor.execute(sql, val)
            mydb.commit()
            return JsonResponse(data,safe=False)
        except Exception as e:
            return JsonResponse({"error":True,"text":str(e)},safe=False)
    return HttpResponse("Hello")

@csrf_exempt
def compare(request):
    if(request.method== 'POST'):
        b1 = request.POST['batch1']
        b2 = request.POST['batch2']
        year = request.POST['year']
        sem = request.POST['sem']
        mycursor = mydb.cursor()
        sql = "SELECT `data` from results where batch in (%s,%s) AND year=%s AND sem=%s"        
        val = (request.POST['batch1'],request.POST['batch2'],request.POST['year'],request.POST['sem'])
        mycursor.execute(sql,val)
        myresult = mycursor.fetchall()
        resp = []
        for x in myresult:
            resp.append(x[0])
        return JsonResponse(resp,safe=False)
    return HttpResponse("Hello")

@csrf_exempt
def analysis(request):
    if(request.method== 'POST'):
        b1 = request.POST['batch']
        year = request.POST['year']
        sem = request.POST['sem']
        mycursor = mydb.cursor()
        sql = "SELECT `data` from results where batch=%s AND year=%s AND sem=%s"        
        val = (request.POST['batch'],request.POST['year'],request.POST['sem'])
        mycursor.execute(sql,val)
        myresult = mycursor.fetchall()
        resp = None
        # for x in myresult:
        # print(myresult[0][0])
        resp = myresult[0][0]
        return JsonResponse(resp,safe=False)
    return HttpResponse("Hello")
    


