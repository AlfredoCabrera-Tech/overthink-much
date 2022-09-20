# Overthink Much?

Overthinking and anxiety are two of the most prevalent mental issues amongst people of all kinds. 

The idea of this app is to be a simple tool to give the user a clue as to which one of the mentioned conditions is most probable to be the cause of their mental overactivity; based on a basic test whose results will get more reliable the more people participate on it.

**Live site URL:** https://viking-productivity-suite.netlify.app/

![App Screenshot](/App%20Screenshot.png)

## Why Was This App Made

Overthinking and anxiety are two of the most prevalent mental issues amongst people of all kinds. These conditions can take a heavy toll on our everyday lives, hindering our levels of productivity, interpersonal relationships and overall health.

One of the biggest misconceptions about overthinking and anxiety is thinking that they're the same thing. They're not. Even though they're similar, the origin of their manifestations are two different psychological places and, in consequence, not every approach when dealing with one is going to be appropriate for dealing with the other.

The developer of this app is not a licensed therapist, and this app is not designed to serve as any kind of treatment on any of these conditions. The idea of this app is merely to be a simple tool to give the user a clue as to which one of the mentioned conditions is most probable to be the cause of their mental overactivity; based on a basictest whose results will get more reliable the more people participate on it.

## How It Was Made

**Tech used:**  JavaScript, SASS, MongoDB, Mongoose, NodeJS, ExpressJS, PassportJS, EJS.

This is a full-stack app built around the CRUD functionality, making use of the MVC structure of work.

**JavaScript:**

The backend of this app was made with NodeJS, using ExpressJS as the framework to build the server functionality.

Tools like Express Session and PassportJS (among others) were used to provide this app with an authorization and a login functionality, giving the user access to their individual data but, also, to selected aspects of the global data provided by the rest of the users.

The data exchange between the different aspects of the backend, the REST API build as the foundation of this application, and the user's interaction through the frontend, rely heavily on Express Router.

MongoDB was the database tool selected for this project through MongooseJS, making use of Mongo Atlas so the data could be stored in the cloud.

The timer functionality was built from scratch and, to manage potential lagging and/or general inaccuracies, the setInterval method wasn't set to re-run once every second but once every 250ms in order to make its accuracy more robust and reliable.

**SASS:** 

Making use of Sass's partials, only one simple scss file is rendered to improve speed and performance. Also utilizing modern methods such as @use and @forward were used to make sure the app stayed up to date without deprecated dependencies like node-sass or @import.

**EJS:**

The "Views" part of the MVC paradigm was developed using EJS as the templating engine to work with ExpressJS and the data provided to-and-from the REST API built around this project.

## Future Updates

- The styling and aesthetic aspects of this app are currently under further development and will be improved in future revisions.

- The user will have the ability to "edit" their existing list of words directly from their results page in future revisions.

## Lessons Learned

- As software engineers, we have to stay up to date on the different tools and methods we use to make our ideas a reality. Making sure to be using sustainable and durable systems to build the web should be a priority for us all.

- Modern-day Software Engineers are standing on the shoulders of giants. We have multiple pre-built tools that are effective and allow us to make our work more precise and efficient. Rather than considering using pre-built tools 'cheating', not having to re-invent the wheel every time makes it possible for us to focus on really advancing the end-line on our current knowledge and possibilities. Being the user the ultimate benefactor of such advancements, it's worth it to check out how we can incorporate pre-built tools into our projects, making the tech space a more solid, collaborative community towards a common goal. 

- Balance is vital for both a succesful app, and a Software Engineer striving for excellence. As true as it is the fact that we should make use of modern pre-built tools to enrich our workflow, having the ability to create, work and re-work key components for our application is of monumental importance for a well rounded Developer.

- Tools that make the user's workflow easier/better can ultimately improve their lives. Apps such as this, as small as they may seem, can still be impactful and that's a responsibility we, as Software Engineers, cannot overlook.
