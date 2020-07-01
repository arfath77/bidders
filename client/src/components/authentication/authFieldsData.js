export const signinData = [
    {label : 'Enter Email address', name:'email', placeholder:'example@example.com', iconClass: 'fa-envelope', type:'email'},
    {label : 'Enter password', name: 'password', placeholder: 'Password', type: 'password', iconClass: 'fa-lock'}
]

export const signupData = [
    {label : 'Enter Email address', name:'email', placeholder:'example@example.com', iconClass: 'fa-envelope', type:'email'},
    {label : 'Enter Name', name:'name', placeholder:'John Smith', iconClass: 'fa-avatar', type:'input'},
    {label : 'Enter Company details', name:'company', placeholder:'XYZ corporation Pvt.Ltd', iconClass: 'fa-work', type:'input'},
    {label : 'Enter password', name: 'password', placeholder: 'Password', type: 'password', iconClass: 'fa-lock'},
    {label : 'Confirm password', name: 'confirm password', placeholder: 'Confirm Password', type: 'password', iconClass: 'fa-lock'},
    {label : 'Select Account Type', name: 'authority', type: 'select', selectOptions : ['Retailer','Distributor'], iconClass: 'fa-tag'}
]

export const signinBtn = [
    {label: 'SignIn', type:'submit'},
    {label: 'Cancel', type:'cancel'}
]

export const signupBtn = [
    {label: 'SignUp', type:'submit'},
    {label: 'Cancel', type:'cancel'}
]