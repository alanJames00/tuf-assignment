'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import CodeMirror from '@uiw/react-codemirror';


export default function Page() {


    // States
    const [language, SetLanguage] = useState('C++');
    const [codeString, setCodeString] = useState('');


    return (
        <div className=" mx-4 my-4">
            <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Enter your username" />
                    </div>
                    <div className="space-y-2">
                        <Label>Preferred code language</Label>
                        <div className="space-y-2">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Java</SelectItem>
                                    <SelectItem value="dark">Python</SelectItem>
                                    <SelectItem value="system">C</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                    <Label htmlFor="stdin">Standard input (stdin)</Label>
                    <Textarea className="min-h-[100px]" id="stdin" placeholder="Enter the standard input for your code" />
                </div>

                </div>

                <div className="space-y-2">
                    {/*                 
                    <Textarea className="min-h-[200px]" id="source-code" placeholder="Enter your code" />
                */}

                    <Label htmlFor="source-code">Source code</Label>
                    <CodeMirror 
                        height="400px"  
                        width="100%"
                        value={codeString}
                        lang="python"
                        />
                </div>

                

            </div>
            <Button className="mx-auto flex md:static">Submit code</Button>
        </div>
    );
}

