import { Card, Typography } from "@mui/material"

export default function StageCard({currStage, triggerStage, title, children}){
    const current = currStage === triggerStage;

    return(
        <Card elevation={current ? 4 : 2} style={{opacity: current ? 1 : 0.5, pointerEvents: current ? 'all' : 'none'}} sx={{maxWidth: 300, padding: 2}}>
            <Typography variant="h5">{title}</Typography>
            {children}
        </Card>
    )
}