Eurocamp Part 1

Firstly I'd have the user.id and parcs.id as foreign keys in the booking table as it isnt relational without them also as this keeps the data congruent and consistent.

I'd be curious as to the use of GUIDs instead of an INT id, I've seen uses where both are present which helps with searching while also giving each row a unique id.

Split name into firstname and lastname. Include title field.

Include Guid in the Parcs table seeding. or even further, have a stored proc to include the user name and parc name in the booking call.

Also I found it curious that the U in CRUD is missing, so we'd need to add in a PUT request to th api to edit records.


Running the app:

I trashed the data in booking and parc, due to the parc seeding data using ids not guids, plus the bookings table containing nonsenical data.


Part 2

As a front-end dev who also likes to dabble in UX, I keep up to date on both fields - with front-end dev I use both Angular and React, mainly in the mobile field but also SPAs. I do feel that the front-end dev field does like to shift to a new framework a bit too readily.

As for UX, I do believe the days of paradigm shifting is basically over, we've reached a level of user familiarity with design patterns that reinventing those would require far too much retraining of users.