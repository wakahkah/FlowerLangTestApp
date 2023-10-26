class FlowerLangData {
  name: string;
  meanings: string[];
  imageUrl: string;
  color: string[];
  category: string;

  constructor(
    name: string,
    meanings: string[],
    imageUrl: string,
    color: string[],
    category: string,
  ) {
    this.name = name;
    this.meanings = meanings;
    this.imageUrl = imageUrl;
    this.color = color;
    this.category = category;
  }
}

export default FlowerLangData;
