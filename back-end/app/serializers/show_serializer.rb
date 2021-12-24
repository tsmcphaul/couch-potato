class ShowSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :network, :year, :season, :image_link, :rating
  has_many :genres
end
