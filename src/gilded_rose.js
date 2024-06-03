export class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      var amount;
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
        continue;
      } else if(this.items[i].name.startsWith('Conjured')) {
        amount = 2;
      } else if (this.items[i].name == "Aged Brie") {
        amount = -1;
      } else if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].sellIn < 1) {
          amount = this.items[i].quality;
        } else if (this.items[i].sellIn < 6) {
          amount = -3;
        } else if (this.items[i].sellIn < 11) {
          amount = -2;
        } else {
          amount = -1;
        }
      } else {
        amount = 1;
      }

      this.items[i].quality -= amount;
      this.items[i].sellIn -= 1;
      if (this.items[i].sellIn < 0) {
        this.items[i].quality -= amount;
      }

      if(this.items[i].quality < 0) {
        this.items[i].quality = 0;
      } else if(this.items[i].quality > 50) {
        this.items[i].quality = 50;
      }
    }

    return this.items;
  }
}
