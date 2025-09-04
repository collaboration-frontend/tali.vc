const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env['NODE_ENV'] === 'production' ? [
      purgecss({
        content: [
          './src/**/*.html',
          './src/**/*.ts',
          './src/**/*.scss'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        // More aggressive purging
        rejected: true,
        printRejected: false,
        safelist: {
          standard: [
            // Angular Material classes
            /^mat-/,
            /^cdk-/,
            // Angular core classes
            /^ng-/,
            // Common utility classes
            'active',
            'disabled',
            'selected',
            'focus',
            'hover',
            'focus-visible',
            'sr-only',
            // Tailwind safelist
            /^(bg|text|border|flex|grid|p|m|w|h)-/,
            // Focus and accessibility classes
            /^focus-/,
            /^focus-visible/,
            /^ring-/,
            /^outline-/,
            // ARIA and accessibility
            /^aria-/,
            /^sr-/,
            // Your custom classes that might be dynamic
            /^status-/,
            /^stc-/,
          ],
          deep: [
            // Dynamic classes that might be added via JavaScript
            /mat-.*-theme$/,
            /.*-active$/,
            /.*-selected$/,
          ],
          greedy: [
            // Patterns to keep all variations
            /^mat-button/,
            /^mat-form-field/,
            /^mat-select/,
            /^mat-input/,
            /^mat-icon/,
          ]
        }
      })
    ] : [])
  ]
};
