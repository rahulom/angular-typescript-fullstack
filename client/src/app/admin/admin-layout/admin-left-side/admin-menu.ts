export let adminLeftMenu: any[] = [
    {
        name: 'Accounts',
        childrens: [
            {
                name: 'Master',
                childrens: [
                    { name: 'Group', url: '/accounts/master/groups' },
                    { name: 'Sub Group', url: '/accounts/master/sub-groups' },
                    { name: 'Account', url: '/accounts/master' },
                    { name: 'Opening Balance', url: '' }
                ]
            },
            {
                name: 'Transaction',
                childrens: [
                    { name: 'Cash Payment', url: '/accounts/transaction/cp' },
                    { name: 'Cash Receipt', url: '/accounts/transaction/cr' },
                    { name: 'Bank Payment', url: '/accounts/transaction/bp' },
                    { name: 'Bank Receipt', url: '/accounts/transaction/br' },
                    { name: 'Journal', url: '/accounts/transaction/jl' },
                    { name: 'Contra', url: '/accounts/transaction/ct' },
                    {
                        name: 'Reconciliation',
                        url: '',
                        childrens: [
                            { name: 'Bank', url: '' }
                        ]
                    }
                ]
            },

            {
                name: 'Reports',
                childrens: [
                    { name: 'Group List', url: '' },
                    { name: 'Sub Group List', url: '' },
                    { name: 'Account List', url: '' },
                    { name: 'Day Book', url: '' },
                    { name: 'Ledger', url: '' },
                    { name: 'Trial Balance', url: '' },
                    { name: 'Profit & Loss Account', url: '' },
                    { name: 'Balance Sheet', url: '' },
                ]
            },

        ]
    },

    {
        name: 'Operations',
        childrens: [
            {
                name: 'Master',
                childrens: [
                    { name: 'State', url: '/operations/master/state' },
                    { name: 'District', url: '/operations/master/district' },
                    { name: 'Place', url: '/operations/master/place' },
                    { name: 'Case Type', url: '/operations/master/case-type' },
                    { name: 'Case Subject', url: '/operations/master/case-subject' },
                    { name: 'Ia Subject', url: '/operations/master/ia-subject' },
                    { name: 'Notice Subject', url: '/operations/master/notice-subject' },
                    { name: 'Opinion Subject', url: '/operations/master/opinion-subject' },
                    { name: 'Documentation Subject', url: '/operations/master/doc-subject' },
                    //{name:'Other Subject',url:'/operations/master/other-subject'},
                    { name: 'Proceedings Purpose', url: '/operations/master/purpose' },
                    { name: 'Court Types', url: '/operations/master/court-type' },
                    { name: 'Courts', url: '/operations/master/court' },
                    { name: 'Client Status', url: '/operations/master/client-status' },
                    { name: 'Client', url: '/operations/clients' },
                    //{name:'Client',url:'/operations/master/client-branch'},
                    { name: 'Client Branch', url: '/operations/master/client-branch' },
                    { name: 'Emp Catg', url: '/operations/master/emp-catg' },
                    { name: 'Employee', url: '/operations/master/employee' },
                    { name: 'Associate', url: '/operations/master/associate' },
                    { name: 'File Store Type', url: '/operations/master/file-store-type' },
                    { name: 'Bill Item Head', url: '/operations/master/bill-item-head' },
                ]
            },
            {
                name: 'Transaction',
                childrens: [
                    { name: 'Enquiry', url: '' },
                    { name: 'Appointment', url: '/operations/transaction/appointment' },
                    {
                        name: 'Case',
                        childrens: [
                            { name: 'Case Registration', url: '/operations/transaction/case' },
                            { name: 'Case Papers', url: '/operations/transaction/case-papers' },
                            { name: 'Case Proceedings', url: '/operations/transaction/case-proceedings' },
                            { name: 'Case Remarks', url: '/operations/transaction/case-remarks' },
                            { name: 'Case Things to Do', url: '/operations/transaction/case-thingstodo' },
                            { name: 'Case Reminder', url: '/operations/transaction/case-reminder' },
                            { name: 'Case Store', url: '' },
                        ]
                    },
                    {
                        name: 'IA',
                        childrens: [
                            { name: 'IA Registration', url: '/operations/transaction/ia' },
                            { name: 'IA Papers', url: '/operations/transaction/ia-papers' },
                            { name: 'IA Proceedings', url: '/operations/transaction/ia-proceedings' },
                            { name: 'IA Remarks', url: '/operations/transaction/ia-remarks' },
                            { name: 'IA Things To Do', url: '/operations/transaction/ia-thingstodo' },
                            { name: 'IA Reminder', url: '/operations/transaction/ia-reminder' },
                        ]
                    },
                    {
                        name: 'Notice',
                        childrens: [
                            { name: 'Notice Registration', url: '/operations/transaction/notice' },
                            { name: 'Notice Papers', url: '/operations/transaction/notice-papers' },
                            // {name:'Notice Proceedings',url:''},
                            { name: 'Notice Remarks', url: '/operations/transaction/notice-remarks' },
                            { name: 'Notice Things to Do', url: '/operations/transaction/notice-thingstodo' },
                            { name: 'Notice Reminder', url: '/operations/transaction/notice-reminder' },
                            { name: 'Notice Store', url: '' },
                        ]
                    },
                    {
                        name: 'Opinion',
                        childrens: [
                            { name: 'Opinion Registration', url: '/operations/transaction/opinion' },
                            { name: 'Opinion Papers', url: '/operations/transaction/opinion-papers' },
                            //{name:'Opinion Proceedings',url:''},
                            { name: 'Opinion Remarks', url: '/operations/transaction/opinion-remarks' },
                            { name: 'Opinion Things to Do', url: '/operations/transaction/opinion-thingstodo' },
                            { name: 'Opinion Reminder', url: '/operations/transaction/opinion-reminder' },
                            { name: 'Opinion Store', url: '' },
                        ]
                    },
                    {
                        name: 'Documentation',
                        childrens: [
                            { name: 'Documentation Registration', url: '/operations/transaction/documentation' },
                            { name: 'Documentation Papers', url: '/operations/transaction/documentation-papers' },
                            // {name:'Documentation Proceedings',url:'/operations/transaction/documentation-proceedings'},
                            { name: 'Documentation Remarks', url: '/operations/transaction/documentation-remarks' },
                            { name: 'Documentation Things to Do', url: '/operations/transaction/documentation-thingstodo' },
                            { name: 'Documentation Reminder', url: '/operations/transaction/documentation-reminder' },
                            { name: 'Documentation Store', url: '' },
                        ]
                    },
                    { name: 'Bill', url: '/operations/transaction/bill' },
                    { name: 'Collection', url: '/operations/transaction/collection' },
                ]
            },
            {
                name: 'Templates',
                childrens: [
                    { name: 'Master Templates', url: '/operations/transaction/templates' },
                    { name: 'Document from Template', url: '/operations/transaction/templates-download' },
                ]
            },
            {
                name: 'Reports',
                childrens: [
                    { name: 'Employee List', url: '' },
                    { name: 'Associate List', url: '' },
                    { name: 'Client List', url: '/operations/reports/client' },
                    { name: 'Client Branch List', url: '' },
                    { name: 'Case List', url: '/operations/reports/case' },
                ]
            },
        ]
    },
    {
        name: 'Work Managment',
        childrens: [
            { name: 'List all', url: '/work-managment' },
            { name: 'Create work', url: '/work-magament/create' }
        ]
    },
    {
        name: 'Utilities',
        childrens: [
            { name: 'Company', url: '' },
            // {name: 'Branch',url: ''},
            { name: 'Tax', url: '/utilities/tax' },
            { name: 'Group', url: '' },
            { name: 'User', url: '' },
            { name: 'Permissions', url: '' },
            { name: 'Year End Closing', url: '' },
        ]
    },
];