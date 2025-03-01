import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Montserrat',
  shadows: { sm: '0px 0px 0px rgba(0, 0, 0, 0.0)' },
  components: {
    Modal: {
      styles: {
        modal: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },

    TextInput: {
      styles: {
        input: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
    
    TimeInput: {
      styles: {
        input: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },

    Select: {
      styles: {
        input: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },


    MultiSelect: {
      styles: {
        input: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },

    NumberInput: {
      styles: {
        input: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },

        
      },
    },

    Checkbox: {
      styles: {
        input: {
          color:'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },

    PasswordInput: {
      styles: {
        input: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        icon: {
          backgroundColor: '#0066ff',
          color:'white',
        },
      },
    },

    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
  },
};
