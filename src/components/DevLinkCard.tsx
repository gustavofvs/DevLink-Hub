
import { useState } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'
import { Github, Linkedin, ExternalLink } from 'lucide-react'


function DevLinkCard() {
    return (
        <div className="max-w-md w-full">
            <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/gustavofvs.png" alt="Gustavo Fernandes" />
                        <AvatarFallback>GF</AvatarFallback>
                    </Avatar>
                    <CardTitle>Gustavo Fernandes</CardTitle>
                    <CardDescription>Desenvolvedor Front-end</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                        <a href="https://github.com/gustavofvs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Github size={16} /> Github
                        </a>
                    </Button>
                    <Button asChild>
                        <a href="https://linkedin.com/in/gustavofvs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </Button>
                    <Button asChild>
                        <a href="https://gustavofvs.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink size={16} /> Portfólio Pessoal
                        </a>
                    </Button>
                </CardContent>
                <CardFooter>
                    <h1 className='text-sm text-muted-foreground'>Feito com React e shadcn/ui</h1>
                </CardFooter>
            </Card>
        </div>
    );
}

export default DevLinkCard