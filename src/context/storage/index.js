export default () => {
  if (!localStorage.getItem('TvShows'))
    localStorage.setItem('TvShows', JSON.stringify([]));
  if (!localStorage.getItem('Bookmarks'))
    localStorage.setItem('Bookmarks', JSON.stringify([]));
  if (!localStorage.getItem('Notes'))
    localStorage.setItem('Notes', JSON.stringify([]));
  if (!localStorage.getItem('Tasks'))
    localStorage.setItem('Tasks', JSON.stringify([]));
  if (!localStorage.getItem('Widgets'))
    localStorage.setItem(
      'Widgets',
      JSON.stringify({
        widgetsDisplays: {
          showTasks: true,
          showTvShows: true,
          showSites: true,
          showNotes: true,
          showCrypto: true,
          showAll: false,
        },
      })
    );
  if (!localStorage.getItem('Colors'))
    localStorage.setItem(
      'Colors',
      JSON.stringify({
        colors: {
          fontColor: '#ffffff',
          firstBgColor: '#e855e9',
          secondBgColor: '#7e89c1',
          thirdBgColor: '#00d4ff',
        },
      })
    );
};
