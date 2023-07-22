export const cardObject = ({id, icon, yearStart, yearEnd, mainTitle, mainTitleExtend, institution, description})=>{
    return{
        id: id,
		icon: icon,
		yearStart: yearStart,
		yearEnd: yearEnd,
		title: mainTitle + ' ' + (mainTitleExtend ?? ""),
		institution: institution,
		description: description,
    }
}
