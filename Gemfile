source "https://rubygems.org"

ruby "4.0.0"

gem "tsort"
gem "benchmark", require: false
gem "cgi", require: false




# Rails
gem "rails", "~> 7.1.4"

# Asset pipeline
gem "sprockets-rails"

# Database
gem "pg", "~> 1.5"

# Web server
gem "puma", ">= 5.0"

# JavaScript & Hotwire
gem "importmap-rails", "~> 1.2"
gem "turbo-rails"
gem "stimulus-rails"

# JSON APIs
gem "jbuilder"

# Time zones for Windows
gem "tzinfo-data", platforms: %i[mswin mswin64 mingw x64_mingw jruby]

# Boot performance
gem "bootsnap", require: false

# Geocoding
gem "geocoder"

# CSS & frontend
gem "bootstrap", "~> 5.2"
gem "autoprefixer-rails"
gem "font-awesome-sass", "~> 6.1"
gem "simple_form", github: "heartcombo/simple_form"

# Modern CSS bundling (replacement for sassc-rails)
gem "cssbundling-rails"

group :development, :test do
  gem "dotenv-rails"
  gem "debug", platforms: %i[mri mswin mswin64 mingw x64_mingw]
end

group :development do
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
