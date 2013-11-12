get '/' do
  @twitter_username = "Surram000"
  erb :index
end

post '/' do
  @twitter_username = "Surram000"
  Twitter.update(params[:tweet_text])
  redirect to '/'
end
