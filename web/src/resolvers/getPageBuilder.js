export default `
  pageBuilder[] {
    ...,
    _type == 'pageBuilderClientStories' => {
      ...,
      featured->{...},
      'stories': select(
        addStories && clientStories == 'All' => *[_type == 'clientStory' && _id != ^.featured._ref]|order(publishDate desc),
        addStories && clientStories == 'Selected' => selectedStories
      )
    },
    _type == 'pageBuilderEvents' => {
      ...,
      featured->{...},
      'initialEvents': select(
        addEvents && events == 'All' => *[_type == 'event' && _id != ^.featured._ref]|order(startDate desc),
        addEvents && events == 'Upcoming' => *[_type == 'event' && _id != ^.featured._ref && startDate > now()]|order(startDate desc),
        addEvents && events == 'Past' => *[_type == 'event' && _id != ^.featured._ref && startDate < now()]|order(startDate desc),
      )
    },
  }
`