class Api::CardsController < ApplicationController
	def show
		@card = Card.find(params[:id])
		rescue ActiveRecord::RecordNotFound
      @error = "That card does not exist"
      render 'api/shared/error', status: :unprocessable_entity
	end
end
