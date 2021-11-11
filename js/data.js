formData = `
[
["formID#002","Pre-Departure Checklist","111","Ship Master","Brandon Chris","123","11/11/2021","Brandon Chris","1","vaccinated","10","11/11/2021 3:51 PM"],
["formID#002","Pre-Departure Checklist","112","Ship Member","Tony Stark","123","11/11/2021","Tony Stark","2","vaccinated","16","11/11/2021 3:51 PM"],
["formID#002","Pre-Departure Checklist","113","Ship Member","Steve Rogers","123","11/11/2021","Steve Rogers","3","vaccinated","11","11/11/2021 3:51 PM"],
["formID#002","Pre-Departure Checklist","114","Ship Member","Thor","123","11/11/2021","Thor","2","vaccinated","20","11/11/2021 3:51 PM"],
["formID#002","Pre-Departure Checklist","115","Ship Member","Racoon","123","11/11/2021","Racoon","1","vaccinated","15","11/11/2021 3:51 PM"],
["formID#002","Pre-Departure Checklist","116","Ship Member","Batman","123","11/11/2021","Batman","2","vaccinated","12","11/11/2021 3:51 PM"],
["formID#001","Daily Ship Attendance","111","Ship Master","Brandon Chris","123","10/11/2021","Brandon Chris","Good","1.75","10","11/10/2021 11:54 PM"],
["formID#001","Daily Ship Attendance","112","Ship CrewMember","Caleb Chris","123","10/11/2021","Caleb Chris","Good","1.75","10","11/10/2021 11:55 PM"],
["formID#001","Daily Ship Attendance","113","Ship CrewMember","Rou Chris","123","10/11/2021","Rou Chris","Good","1.75","10","11/10/2021 11:56 PM"],
["formID#001","Daily Ship Attendance","114","Ship CrewMember","Christer Chris","123","10/11/2021","Christer Chris","Good","1.75","10","11/10/2021 11:57 PM"],
["formID#001","Daily Ship Attendance","115","Ship CrewMember","Ger Chris","123","10/11/2021","Ger Chris","Good","1.75","10","11/10/2021 11:58 PM"],
["formID#001","Daily Ship Attendance","116","Ship CrewMember","Jiazhe Chris","123","10/11/2021","Jiazhe Chris","Good","1.75","10","11/10/2021 11:59 PM"],
["formID#003","Another Form","114","Ship CrewMember","Christer Chris","123","10/11/2021","Christer Chris","Good","1.75","10","11/10/2021 11:57 PM"],
["formID#003","Another Form","115","Ship CrewMember","Ger Chris","123","10/11/2021","Ger Chris","Good","1.75","10","11/10/2021 11:58 PM"],
["formID#003","Another Form","116","Ship CrewMember","Jiazhe Chris","123","10/11/2021","Jiazhe Chris","Good","1.75","10","11/10/2021 11:59 PM"],
["formID#001","Daily Ship Attendance","116","Ship CrewMember","Tom Chris","123","10/11/2021","Tom Chris","Good","1.75","10","11/10/2021 11:54 PM"],
["formID#001","Daily Ship Attendance","116","Ship CrewMember","Tom Chris","123","10/11/2021","Tom Chris","Good","1.75","10","11/10/2021 11:54 PM"],
["formID#001","Daily Ship Attendance","116","Ship CrewMember","Tom Chris","123","10/11/2021","Tom Chris","Good","1.75","10","11/10/2021 11:54 PM"],
["formID#001","Daily Ship Attendance","116","Ship CrewMember","Tom Chris","123","10/11/2021","Tom Chris","Good","1.75","10","11/10/2021 11:54 PM"],
["formID#001","Daily Ship Attendance","116","Ship CrewMember","Tom Chris","123","10/11/2021","Tom Chris","Good","1.75","10","11/10/2021 11:54 PM"],
["formID#001","Daily Ship Attendance","116","Ship CrewMember","Tom Chris","123","10/11/2021","Tom Chris","Good","1.75","10","11/10/2021 11:51 PM"]
]
`

console.log('loading test Data')
window.sessionStorage.loaded = 'false'

if (window.sessionStorage.loaded == 'false') {
    console.log('loading test Data Complieted')

    window.sessionStorage.loaded == 'true'
    myStorage = window.sessionStorage;
    myStorage.form1Data = formData;

}

