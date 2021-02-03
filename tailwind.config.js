/* eslint-disable no-restricted-syntax */
module.exports = {
  corePlugins: [
    // 'preflight',
    'container',
    // 'accessibility',
    'alignContent',
    'alignItems',
    'alignSelf',
    // 'appearance',
    // 'backgroundAttachment',
    // 'backgroundColor',
    // 'backgroundImage',
    // 'backgroundOpacity',
    // 'backgroundPosition',
    // 'backgroundRepeat',
    // 'backgroundSize',
    // 'borderCollapse',
    // 'borderColor',
    // 'borderOpacity',
    // 'borderRadius',
    // 'borderStyle',
    // 'borderWidth',
    // 'boxShadow',
    // 'boxSizing',
    'clear',
    // 'cursor',
    'display',
    // 'divideColor',
    // 'divideOpacity',
    // 'divideStyle',
    // 'divideWidth',
    // 'fill',
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    // 'float',
    'fontFamily',
    'fontSize',
    'fontSmoothing',
    'fontStyle',
    'fontWeight',
    // 'gap',
    // 'gradientColorStops',
    // 'gridAutoColumns',
    // 'gridAutoFlow',
    // 'gridAutoRows',
    // 'gridColumn',
    // 'gridColumnStart',
    // 'gridColumnEnd',
    // 'gridColumnStart',
    // 'gridRow',
    // 'gridRowEnd',
    // 'gridRowStart',
    // 'gridTemplateColumns',
    // 'gridTemplateRows',
    'height',
    // 'inset',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'letterSpacing',
    'lineHeight',
    // 'listStylePosition',
    // 'listStyleType',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    // 'objectFit',
    // 'objectPosition',
    // 'opacity',
    // 'order',
    // 'outline',
    'overflow',
    // 'overscrollBehavior',
    'padding',
    // 'placeContent',
    // 'placeholderColor',
    // 'placeholderOpacity',
    // 'placeItems',
    // 'placeSelf',
    // 'pointerEvents',
    'position',
    // 'resize',
    // 'ringColor',
    // 'ringOffsetColor',
    // 'ringOffsetWidth',
    // 'ringOpacity',
    // 'ringWidth',
    // 'rotate',
    // 'scale',
    // 'skew',
    // 'space',
    // 'stroke',
    // 'strokeWidth',
    // 'tableLayout',
    'textAlign',
    // 'textColor',
    // 'textDecoration',
    // 'textOpacity',
    // 'textOverflow',
    // 'textTransform',
    // 'transform',
    // 'transformOrigin',
    // 'transitionDelay',
    // 'transitionDuration',
    // 'transitionProperty',
    // 'transitionTimingFunction',
    // 'translate',
    // 'userSelect',
    // 'verticalAlign',
    // 'visibility',
    // 'whitespace',
    'width',
    'wordBreak',
    'zIndex',
  ],
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      1: '1rpx',
      2: '2rpx',
      4: '2rpx',
      6: '6rpx',
      8: '8rpx',
      10: '10rpx',
      12: '12rpx',
      14: '14rpx',
      16: '16rpx',
      18: '18rpx',
      20: '20rpx',
      22: '22rpx',
      24: '24rpx',
      26: '26rpx',
      28: '28rpx',
      30: '30rpx',
      32: '32rpx',
      34: '34rpx',
      36: '36rpx',
      38: '38rpx',
      40: '40rpx',
      42: '42rpx',
      44: '44rpx',
      46: '46rpx',
      48: '48rpx',
      50: '50rpx',
      60: '60rpx',
      56: '56rpx',
      64: '64rpx',
      70: '70rpx',
      80: '80rpx',
      90: '90rpx',
      100: '100rpx',
      120: '120rpx',
      140: '140rpx',
      160: '160rpx',
      200: '200rpx',
      260: '260rpx',
      300: '300rpx',
      350: '350rpx',
      400: '400rpx',
      500: '500rpx',
      600: '600rpx',
      700: '700rpx',
      750: '750rpx',
    },
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1_2': '50%',
      '1_3': '33.333333%',
      '2_3': '66.666667%',
      '1_4': '25%',
      '2_4': '50%',
      '3_4': '75%',
      '1_5': '20%',
      '2_5': '40%',
      '3_5': '60%',
      '4_5': '80%',
      '1_6': '16.666667%',
      '2_6': '33.333333%',
      '3_6': '50%',
      '4_6': '66.666667%',
      '5_6': '83.333333%',
      '1_12': '8.333333%',
      '2_12': '16.666667%',
      '3_12': '25%',
      '4_12': '33.333333%',
      '5_12': '41.666667%',
      '6_12': '50%',
      '7_12': '58.333333%',
      '8_12': '66.666667%',
      '9_12': '75%',
      '10_12': '83.333333%',
      '11_12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1_2': '50%',
      '1_3': '33.333333%',
      '2_3': '66.666667%',
      '1_4': '25%',
      '2_4': '50%',
      '3_4': '75%',
      '1_5': '20%',
      '2_5': '40%',
      '3_5': '60%',
      '4_5': '80%',
    }),
    translate: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1_2': '50%',
      '1_3': '33.333333%',
      '2_3': '66.666667%',
      '1_4': '25%',
      '2_4': '50%',
      '3_4': '75%',
      '1_5': '20%',
      '2_5': '40%',
      '3_5': '60%',
      '4_5': '80%',
      full: '100%',
    }),
    fontSize: {
      xs: '20rpx',
      sm: '24rpx',
      base: '28rpx',
      lg: '32rpx',
      xl: '36rpx',
      '2xl': '48rpx',
      '3xl': '60rpx',
      '4xl': '72rpx',
      '5xl': '84rpx',
      '6xl': '96rpx',
    },
    borderWidth: {
      default: '1rpx',
      0: '0rpx',
      2: '2rpx',
      4: '4rpx',
      8: '8rpx',
    },
    boxShadow: {},
    extend: {},
  },
  variants: {
    accessibility: [],
    alignContent: [],
    alignItems: [],
    alignSelf: [],
    animation: [],
    appearance: [],
    backgroundAttachment: [],
    backgroundClip: [],
    backgroundColor: [],
    backgroundImage: [],
    backgroundOpacity: [],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: [],
    borderColor: [],
    borderOpacity: [],
    borderRadius: [],
    borderStyle: [],
    borderWidth: [],
    boxShadow: [],
    boxSizing: [],
    clear: [],
    container: [],
    cursor: [],
    display: [],
    divideColor: [],
    divideOpacity: [],
    divideStyle: [],
    divideWidth: [],
    fill: [],
    flex: [],
    flexDirection: [],
    flexGrow: [],
    flexShrink: [],
    flexWrap: [],
    float: [],
    fontFamily: [],
    fontSize: [],
    fontSmoothing: [],
    fontStyle: [],
    fontVariantNumeric: [],
    fontWeight: [],
    gap: [],
    gradientColorStops: [],
    gridAutoColumns: [],
    gridAutoFlow: [],
    gridAutoRows: [],
    gridColumn: [],
    gridColumnEnd: [],
    gridColumnStart: [],
    gridRow: [],
    gridRowEnd: [],
    gridRowStart: [],
    gridTemplateColumns: [],
    gridTemplateRows: [],
    height: [],
    inset: [],
    justifyContent: [],
    justifyItems: [],
    justifySelf: [],
    letterSpacing: [],
    lineHeight: [],
    listStylePosition: [],
    listStyleType: [],
    margin: [],
    maxHeight: [],
    maxWidth: [],
    minHeight: [],
    minWidth: [],
    objectFit: [],
    objectPosition: [],
    opacity: [],
    order: [],
    outline: [],
    overflow: [],
    overscrollBehavior: [],
    padding: [],
    placeContent: [],
    placeItems: [],
    placeSelf: [],
    placeholderColor: [],
    placeholderOpacity: [],
    pointerEvents: [],
    position: [],
    resize: [],
    ringColor: [],
    ringOffsetColor: [],
    ringOffsetWidth: [],
    ringOpacity: [],
    ringWidth: [],
    rotate: [],
    scale: [],
    skew: [],
    space: [],
    stroke: [],
    strokeWidth: [],
    tableLayout: [],
    textAlign: [],
    textColor: [],
    textDecoration: [],
    textOpacity: [],
    textOverflow: [],
    textTransform: [],
    transform: [],
    transformOrigin: [],
    transitionDelay: [],
    transitionDuration: [],
    transitionProperty: [],
    transitionTimingFunction: [],
    translate: [],
    userSelect: [],
    verticalAlign: [],
    visibility: [],
    whitespace: [],
    width: [],
    wordBreak: [],
    zIndex: [],
  },
  plugins: [],
};
