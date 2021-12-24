class GenreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :show_id
  belongs_to :show
end
