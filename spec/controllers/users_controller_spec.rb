require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  before(:each) do
    allow_any_instance_of(UsersController).
        to receive_messages(authenticate_user!: true)
  end

  it 'GET #index' do
    get :index, params: { format: :json }
    expect(response).to be_successful
  end

end