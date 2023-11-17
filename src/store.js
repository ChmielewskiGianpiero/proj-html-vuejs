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
    ],
    
    gallery: [
      {
        src: '/public/mt-2236-home-gallery1.jpg'
      },
      {
        src: '/public/mt-2236-home-gallery2.jpg'
      },
      {
        src: '/public/mt-2236-home-gallery3.jpg'
      },
      {
        src: '/public/mt-2236-home-gallery4.jpg'
      }
    ],

    cards: [
      {
        srcPath: '/public/mt-2236-home-img1.jpg',
        title: "Garry Kasparov's Masterclass",
        text: 'Learn the tips, tricks, and strategies from one of the best masters',
        price: '$456'
      },
      {
        srcPath: '/public/mt-2236-home-img2.jpg',
        title: "Online Chess Lessons for Beginners",
        text: 'Catered to adult beginners who have hours a week to practice',
        price: '$205'
      },
      {
        srcPath: '/public/mt-2236-home-img3.jpg',
        title: "International Chess School Online",
        text: 'Chess lessons for children and adults held completely online',
        price: '$356'
      },
    ]
}
)