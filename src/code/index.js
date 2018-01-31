const sample01 = `// display.js

import Prism from 'vue-prism-component'

  export default {
    data() {
      return {
        code: 'const a = b'
      }
    },
    components: {
      Prism
    }
  }
`;

const sample02 = `// app.js

/* Basic keywords */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* Positional alignment */
justify-self: center;     /* Pack item around the center */
justify-self: start;      /* Pack item from the start */
justify-self: end;        /* Pack item from the end */
justify-self: flex-start; /* Pack flex item from the start */
justify-self: flex-end;   /* Pack flex item from the end */
justify-self: self-start;
justify-self: self-end;
justify-self: left;       /* Pack item from the left */
justify-self: right;      /* Pack item from the right */`;

export { sample01, sample02 };
