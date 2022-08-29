export interface iUser {
    id?:    number|null
    sub:    string
    name:   string
    cpf:    string
    email:  string
    birth:  Date
}

export interface iAddress {
    id?:            number|null,
    ownAdrress:     boolean,
    userOwner:      number,
    street:         string,
    neighborhood:   string,
    number:         string,
    postal_code:    string,
    complemento:    string | null
  }

export interface iHouses{
    id?:                number|null;
    name:               string;
    author:             number;
    createAddress?:     boolean;
    houseAddress:       iAddress;
    bills:              [];               
}

export interface iBills{
    id:         number;
    owner:      number;
    house:      number;
    name:       String|null;
    ulr:        String|null;
    value:      number;
    img:        string|null;
    dateBill:   Date;
}