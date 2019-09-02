Delivery service
==================

This application provide delivery service and allow users send gifts to each other.

[Online demo](https://lit-retreat-17021.herokuapp.com)

Compatibility
-------------
* Ruby 2.5 or higher

Installation and Setup
----------------------

1) Clone or [download](https://github.com/frywer/delivery_service/archive/master.zip) this repo

```
$ git clone https://github.com/frywer/delivery_service.git
```
2) Move to repository
```
$ cd delivery_service
```
3) Download ruby dependencies
```
$ bundle install
```
4) Download react dependencies
```
$ yarn install
```
5) Create database
```
$ bundle exec rails db:create
```
6) Running migrations
```
$ bundle exec rails db:migrate
```
7) Running assets compilation
```
$ bundle exec rails assets:precompile
```
* If you are want to run application in development mode execute next command

```
$ rails server
```
Usage
----------------------
1) Open application in browser
2) If you does no have account yet, press button **Sign Up** and fill form.
3) After authentication you will see deliveries you have received from other people.
4) Press button **New delivery** to send new delivery to other users.