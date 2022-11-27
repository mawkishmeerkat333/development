# Development

### Link to Deployed Website
https://mawkishmeerkat333.github.io/development/

### Goal and Value of the Application
The trip planner allows a user to peruse SC state parks by region and wifi availability and add tickets to see how much the trip would cost per adult. Want to plan a mountain getaway free from wifi and work? You can do that. Want to find a park where you can work remotely from the beach? You can do that too. For a user planning on a budget, the parks can be sorted by ticket price.

### Usability Principles Considered
I established visual hierarchy in several ways. Differing font sizes are used consistently in order to differentiate certain levels of text. Titles are larger than subtitles, which are larger than paragraphs. Therefore, the name of the park is larger than the park region, which is larger than the description. I also subtlely used drop shadows to imply depth and thus a front-to-back hierarchy: the header at the top with the highest-level information (i.e., title and park logo) seems closer than the tiles, which in turn seem closer than the background. This helps to inform the user's conceptual model. I also visually grouped similar information into their own tiles. Each `ParkItem` is a separate tile; the sorting and filtering options are in another tile; and the aggregator belongs to its own tile as well. For cohesion and consistency, all buttons use the same design. Finally, I made sure the second `ParkItem` tile is partly off the screen so that the user is aware she can scoll to see more parks.

### Organization of Components

Beyond the overall `App`, there are two components: `ParkItem` and `Checkbox`. The `ParkItem` component is created for each park by a mapping function in `App.js`, and each `ParkItem` includes the title, region, photo, description, wifi availibility, and price of admission. Moreover, each `ParkItem` has a state variable to keep track of whether it has been added to the aggregator. The `Checkbox` component includes an input of `type=checkbox` and a label, as well as a state variable to keep track of whether it is checked.

### How Data is Passed Down Through Components
For a `ParkItem` component, its props include the park `item` (an entry from `park-data.json` that includes the `name` of the park, the `region`, a `description`, the cost of `admission`, whether the park has `wifi`, and the `image` file path. An `onClick` handler is passed to each `ParkItem` component, which is called whenever the "(Add to)/(Remove from) Trip" button is pressed. By passing the `onClick` handler to a `ParkItem`, the prop `item` can be passed as an argument to the handler. Finally, an `added` boolean prop is passed to set the initial value of the `added` state variable in each `ParkItem`. This is necessary because whenever the filtering options are changed, a `ParkItem` item might disappear or reappear, so it must know whether it is currently in the aggregator when rendered again.

For a `Checkbox` component, its props include a `name`, `id`, `value`, `label`, `onChange` handler, and the `reset` state variable in `App.js`. Of special interest are the last two props. By passing the `onChange` handler to the `Checkbox` component, the event object `e` can be passed as an argument to the handler. The `reset` prop is in the dependency array of a `useEffect` function in `Checkbox.js` that resets a filter to be checked whenever the "Reset filters" button is pressed.

### How the User Triggers State Changes

The user triggers state changes by clicking the "(Add to)/(Remove from) Trip" button on a `ParkItem` component, by clicking the "Reset Filters" button, by (un)checking any of the filters, and by selecting one of the sorting option radio buttons.
