const APP_COLORS = {
    light_green: ' rgba(96,193,174,1)',
    cloud: 'rgba(96,163,193,1)',
    dark_blue:'rgba(2,19,26,1)',
    darker_white:'rgba(248,248,248,1)',
    light_cloud:'rgb(236,240,241,1)',
    gray:'rgb(123,125,126,1)',
    light_gray:'rgb(195,206,210,1)'
  };
  const THEME_COLORS = {
    ...APP_COLORS,
    background: APP_COLORS.darker_white,
  };
  
  const colorWithAlpha = (name = 'white', opacity = 1) => {
    if (!THEME_COLORS[name]) throw new Error('Color does not exist');
    if (!THEME_COLORS[name]) {
      name = 'denim';
    }
    return THEME_COLORS[name].split(', 1)').join(`, ${opacity})`);
  };
  
  const colors = {
    ...THEME_COLORS,
    colorWithAlpha,
  };
  
  export default colors;