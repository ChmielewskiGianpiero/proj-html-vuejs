import { reactive } from 'vue';

export const store = reactive ({
    contacts: {
        address: '6767 Santa Monica Blvd, Los Angeles, CA 90038',
        phoneNumber: ' 123-456-7890'
    },

    navMenu: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Services',
          href: '#'
        },
        {
          text: 'Courses',
          href: '#'
        },
        {
          text: 'About',
          href: '#'
        },
        {
          text: 'FAQ',
          href: '#'
        },
        {
            text: 'Blog',
            href: '#'
        },
        {
            text: 'Contact Us',
            href: '#'
        },
    ],

    educationCard : [
        {
          text: 'Build self-regulation and motivation'
        },
        {
          text: 'Help with concentration issues'
        },
        {
          text: 'Learn to plan, organize, and prioritize'
        },
        {
          text: 'Regulate emotions'
        },
        {
          text: 'Learn to pay attention to detail'
        }
  ]
}
)