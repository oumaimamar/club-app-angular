export interface Club {
  id : number;
  code : string;
  name : string;
  ville :ClubVille ;
  nbPersons : number;
}

export interface Terrain {
  id : number;
  name : string;
  type : TerrainType;
  status : TerrainStatus;
  nbPersons : number;
  club : Club;
}

export enum TerrainType{
  Tennis,Basketball,Football

}
export enum TerrainStatus{
  DISPONIBLE, EN_ARRET
}
export enum ClubVille{
  CASABLANCA, SALE, MARRAKESH, FES, RABAT
}
