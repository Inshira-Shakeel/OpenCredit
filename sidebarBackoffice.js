module.exports = {
  backofficeSidebar: [
    'backoffice',

    {
      type: 'category',
      label: 'Introduction',
      items: [
        'LOSBackoffice/backofficeoverview',
        'LOSBackoffice/los-vs-lms',
      ],
    },
    {
      type: 'category',
      label: 'Loan Origination System (LOS)',
      items: [
        'LOS/los-ui',
        'LOS/loan-application',
        'LOS/loan-tracking',
        'LOS/loan-product-creation',
        'LOS/los-backoffice',
      ],
    },
    {
      type: 'category',
      label: 'Loan Management System (LMS)',
      items: [
        'LMS/lms-operations',
      ],
    },
    {
      type: 'category',
      label: 'Financial Management',
      items: [
        {
          type: 'category',
          label: 'General Ledger',
          items: [
            'Financials/chart-of-accounts',
            'Financials/gl-posting',
            'Financials/journal-in',
            'Financials/journal-out',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Customer & Monitoring',
      items: [
        'Management/customer-management',
        'Management/audit-log',
      ],
    },
  ],
};