import {cityAction, cityActionTypes} from "../../types/city";
import {Dispatch} from "redux";
import axios from "axios";

export function filterCity (data:string)  {

    return async (dispatch:Dispatch<cityAction>) => {
        try{
              let arr2:Array<string> = []
              let c:Array<string> = ['']
              const city= [
                  {city:'Tashkent'},
                  {city:'Bukhara'},
                  {city:'Andijan'},
                  {city:'Fergana'},
                  {city:'Termez'},
                  {city:'Samarkand'},
        ]
              city.forEach((arg) => arr2.push(arg.city.toLocaleLowerCase()))
              c = arr2.filter(arg => arg.includes(data.trim().toLocaleLowerCase()))
              dispatch({type:cityActionTypes.FILTER_CITY,payload:c})

        }
        catch(error){
            console.log(error)
        }
    }

}