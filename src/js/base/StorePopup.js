export class StorePopup {
    constructor(name, surname, age, popupText, popupImageSrc) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.popupText = popupText;
        this.popupImageSrc = popupImageSrc;
    }

    show() {
        const text = this.popupText;
        const name = this.name;
        const surname = this.surname;
        const age = this.age;
        const popupImageSrc = this.popupImageSrc;

        Swal.fire({
            imageUrl: popupImageSrc,
            imageHeight: 300,
            text: `${text} | ${name} ${surname}, ${age}`,
        });
    }
}
