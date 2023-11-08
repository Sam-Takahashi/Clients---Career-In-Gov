CSS: revisions.css(for reference)
JS: revisions.js(for reference)
All styles and scripts have been implemented in the main files.

Revisions:
.1)Feedback - Location and address are not required and can't be presented on the job card. The same problem with Location fields and Salary in the Full Job. Description side. How it should look without one of these items?
-- removed location and address fields in both the job cards and selected job card sections

.2)Feedback - Mobile view. If we have only one job in the search results the design of the page isn't good. We can see part of the full job description and footer.

-- increased search results background height to cover the screen(hiding background elements when only a single job is displayed)

.3)Feedback - Feature for "Save". I suppose it should work only for logged-in users. What needs to be changed after clicking to Save? Icon/text?

-- clicking the Save buttons now changes the the button background color(toggles CSS class: save--toggle, attribute: data-save)