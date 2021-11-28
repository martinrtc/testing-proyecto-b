class User < ApplicationRecord
  has_many :reservations

  def self.get_or_create(email, name)
    @user = User.find_by(email: email)
    if @user.nil?
      @user = User.create(email: email, name: name)
    end
    @user
  end
end
