import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridge'},
            {id: 2, name: 'Smartphone'},
            {id: 3, name: 'Laptop'},
            {id: 4, name: 'TV'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Lenovo'},
            {id: 3, name: 'Asus'},
            {id: 4, name: 'Apple'},
        ]
        this._device = [
            {id: 1, name: 'Samsung', price: 124, img: 'https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg'},
            {id: 2, name: 'Lenovo', price: 645, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjuNiLpxy4fBAiMaXuoSVZe1UN2-_iSkZdumFV4qG8qcegDm1zAuWfc1XnrYDoAIaG-A&usqp=CAU'},
            {id: 3, name: 'Asus', price: 456, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeIFuY3QAXeymL6p49o8lZASa5nug4WtnMpP8ruWqopLy4WZT7rzZ0c4pi_Q900pmpRo&usqp=CAU'},
            {id: 4, name: 'Apple', price: 788, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66vjOhEEn73sLkzk-safCDjCcnG0IaCIZLJUNFnlbOhc8Gqqgt-REj1yTsv_aw4xcfdA&usqp=CAU'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevice(device) {
        this._device = device
    }
    setSelectType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get device() {
        return this._device
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

}