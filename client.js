window.TrelloPowerUp.initialize({
  'board-buttons': function(t) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/61/61456.png',
      text: 'Open Weekly Grid',
      callback: function(t) {
        return t.popup({
          title: 'Weekly Grid',
          url: 'index.html',
          height: 600
        });
      }
    }];
  }
});
