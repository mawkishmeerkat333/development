# Development

### Link to Deployed Website
https://mawkishmeerkat333.github.io/development/

### Goal and Value of the Application

The trip planner allows a user to peruse SC state parks by region and wifi availability and add tickets to see how much the trip would cost per adult. Want to plan a mountain getaway free from wifi and work? You can do that. Want to find a park where you can work remotely from the beach? You can do that too.

### Usability Principles Considered

### Organization of Components

Beyond the overall `App`, there are two components: `ParkItem` and `Checkbox`. The `ParkItem` component is created for each park by a mapping function in `App.js`, and each `ParkItem` includes the title, region, photo, description, wifi availibility, and price of admission. Moreover, each `ParkItem` has a state variable to keep track of whether is has been added to the aggregator. The `Checkbox` component includes an input of `type=checkbox` and a label, as well as a state variable to keep track of whether it is checked.

### How Data is Passed Down Through Components

### How the User Triggers State Changes

The user triggers state changes by clicking the "(Add to)/(Remove from) Cart" button on a `ParkItem` component, by clicking the "Reset Filters" button, by (un)checking any of the filters, and by selecting one of the sorting option radio buttons.
