export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      BUTTON: {
        CREATE: 'Create Film',
        LOGIN: 'Login',
        MORE: 'Read',
        FREE: 'Try it free'
      },
      HERO: {
        HEADER: 'Awe-inspiring Video in an Instant',
        SUBHEADER: 'AI Video Maker'
      },
      FEATURES: {
        1: {
          HEADER: 'Templates',
          TEXT: 'Create cinematic videos with a variety of templates'
        },
        2: {
          HEADER: 'Creative AI',
          TEXT: 'Creative AI analyzes your video and selects the best moments'
        },
        3: {
          HEADER: 'Social',
          TEXT: 'Make videos in any dimension (square, horizontal, vertical)'
        }
      },
      ABOUT: {
        HEADER: 'Video in an Instant',
        SUBHEADER: 'AI Video Maker'
      },
      MENU: {
        HOME: 'Home',
        ABOUT: 'About',
        EDITOR: 'Editor',
        BLOG: 'Blog',
        OLD: 'Old Version',
        CONTACTS: 'Contacts',
        COOKIES: 'Cookies Policy',
        PRIVACY: 'Privacy Policy',
        TERMS: 'Terms of Service'
      },
      META: {
        TITLE: 'Online Video Editor | AI Video Maker',
        DESCRIPTION: 'Automatic video editing. Fast, easy and free. Music, effects, templates. Video editing online with Artificial Intelligence.'
      }
    })
  })
}
