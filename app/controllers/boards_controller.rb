class BoardsController < ApplicationController
  def show
    @board = Board.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      @error = "That board does not exist"
      render html: @error
      # render 'shared/error', status: :unprocessable_entity
  end
end
