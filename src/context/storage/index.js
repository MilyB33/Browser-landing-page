// eslint-disable-next-line
export default () => {
  if (!localStorage.getItem('TvShows'))
    localStorage.setItem(
      'TvShows',
      JSON.stringify([
        {
          id: 32157,
          name: 'Rick and Morty',
          airDate: '2021-07-12',
          url: 'https://www.episodate.com/tv-show/rick-and-morty',
        },
        {
          id: 2161,
          name: 'Loki',
          airDate: '2021-07-14',
          url: 'https://www.episodate.com/tv-show/loki',
        },
        {
          id: 57910,
          name: 'The Witcher',
          airDate: 'Unknown',
          url: 'https://www.episodate.com/tv-show/the-witcher',
        },
        {
          id: 58829,
          name: 'Cobra Kai',
          airDate: 'Unknown',
          url: 'https://www.episodate.com/tv-show/cobra-kai',
        },
        {
          id: 67305,
          name: 'The Boys',
          airDate: 'Unknown',
          url: 'https://www.episodate.com/tv-show/the-boys-amazon-prime',
        },
        {
          id: 70341,
          name: 'The Witcher: Blood Origin',
          airDate: 'Unknown',
          url: 'https://www.episodate.com/tv-show/the-witcher-blood-origin',
        },
      ])
    );
  if (!localStorage.getItem('Bookmarks'))
    localStorage.setItem(
      'Bookmarks',
      JSON.stringify([
        {
          id: '10af1c28-9e45-49e8-988f-e7646e531063',
          name: 'facebook',
          url: 'https://www.facebook.com',
          icon: 'https://www.facebook.com/favicon.ico',
        },
        {
          id: '510d00c3-077c-4fd6-bd56-377036a54bea',
          name: 'github',
          url: 'https://github.com',
          icon: 'https://github.com/favicon.ico',
        },
        {
          id: 'b08ebcb1-3a37-41cd-a4a8-af83e7fbf160',
          name: 'facebook',
          url: 'https://www.facebook.com',
          icon: 'https://www.facebook.com/favicon.ico',
        },
        {
          id: '88db9798-8bdf-4d3d-8536-e48df9df0eaf',
          name: 'My site',
          url: 'https://localhost',
          icon: 'https://localhost/favicon.ico',
        },
        {
          id: 'b8e8d03b-ed4e-4f6d-9206-af1c0c1cdc9d',
          name: 'My site',
          url: 'https://localhost',
          icon: 'https://localhost/favicon.ico',
        },
        {
          id: '74efb6ad-85d3-40a8-ba08-e33deab8e73d',
          name: 'Github',
          url: 'https://github.com',
          icon: 'https://github.com/favicon.ico',
        },
      ])
    );
  if (!localStorage.getItem('Notes'))
    localStorage.setItem(
      'Notes',
      JSON.stringify([
        {
          id: 'a8f58bf8-b9cb-4229-8e4a-4b55487cfca6',
          title: 'First Note',
          content: 'Some note content',
          edit: false,
        },
        {
          id: '622e66fb-bf51-4ffc-b93e-fe62b8782ff8',
          title: 'Second note',
          content: 'Some note content',
          edit: false,
        },
      ])
    );
  if (!localStorage.getItem('Tasks'))
    localStorage.setItem(
      'Tasks',
      JSON.stringify([
        {
          title: 'Go shopping',
          time: '12:00',
          id: '86fc1e74-c26b-4679-8a3a-10a90ca8af83',
        },
        {
          title: 'Go for a walk ',
          time: '15:04',
          id: 'a5190846-ca72-4cc5-a0bc-fdf387572588',
        },
        {
          title: 'Go to bed ',
          time: '22:30',
          id: 'dcd36a97-7288-4acf-ab5c-d10e6c9c3cea',
        },
      ])
    );
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
