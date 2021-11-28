FROM ruby:2.6.3

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# # Node.js
# RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
#     && apt-get install -y nodejs

# # yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -\
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn

RUN mkdir ./bproject
WORKDIR /bproject
COPY Gemfile /bproject/Gemfile
COPY Gemfile.lock /bproject/Gemfile.lock
RUN gem install bundler:2.1.4
RUN bundle install
COPY . /bproject

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]