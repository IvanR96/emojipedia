import { Entry } from "./Entry"

export const createEmojipedia = (Emojipedia) =>{
  return(
    <Entry 
    emoji={Emojipedia.emoji}
    name={Emojipedia.name}
    meaning={Emojipedia.meaning}

    />
  )
}