class CarData{
    public mispar_rechev?:string;
	public kinuy_mishari?:string;
    public tozeret_nm?:string;
    public tokef_dt?:string;
    public tzeva_rechev?:string;
    public shnat_yitzur?:number;

    constructor(mispar_rechev:string, kinuy_mishari:string, tozeret_nm:string, tzeva_rechev:string, shnat_yitzur:number,tokef_dt:string){
        this.mispar_rechev=mispar_rechev;
        this.kinuy_mishari=kinuy_mishari;
        this.tozeret_nm=tozeret_nm;
        const carDT = tokef_dt.split("T")[0].split("-");
        this.tokef_dt=carDT[2]+"/"+carDT[1]+"/"+carDT[0];
        this.tzeva_rechev=tzeva_rechev;
        this.shnat_yitzur=shnat_yitzur;
    }
}
export default CarData;