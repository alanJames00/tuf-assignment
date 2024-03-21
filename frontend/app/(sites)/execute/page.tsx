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

    const langArray = [ {name: 'C++', id: 54 }, { name: 'Java', id: 62 }, { name: 'Javascript', id: 93 }, { name: 'Python', id: 92 }];

    // States
    const [username, setUsername] = useState<string>('');
    const [language, SetLanguage] = useState<any>(langArray[0]);
    const [codeString, setCodeString] = useState<string>('');
    const [stdin, setStdnin] = useState<string>('');
    const [output, setOutput] = useState<string>('your output will appear here');

    // debug info
    console.log('language:', language);
    console.log('codeString:', codeString);
    console.log('stdin:', stdin);
    console.log('username: ', username);


    async function runCode() {

    }

    async function submitCode() {

    }


    function encodeBase64(inputString: string): string {
        const encodedString = btoa(inputString);
        return encodedString;
    }

    function decodeBase64(inputString: string): string {
        const decodedString = atob(inputString);
        return decodedString;
    }

    return (
        <div className=" mx-4 my-4">
            <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label>Preferred code language</Label>
                        <div className="space-y-2">
                            
                            <Select onValueChange={(e) => SetLanguage(langArray.find((lang) => lang.name == e))}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder={language.name} />
                                </SelectTrigger>
                                <SelectContent>

                                   { langArray.map((lang) => {
                                        return (<SelectItem key={lang.id} value={lang.name}>{lang.name}</SelectItem>);
                                    }) }

                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Label htmlFor="stdin">Standard input (stdin)</Label>
                        <Textarea className="min-h-[100px]" id="stdin" placeholder="Enter the standard input for your code" value={stdin} onChange={(e) => setStdnin(e.target.value)} />

                        <div className=" flex justify-between">

                            <Button className=" mx-auto w-[49%] flex md:static">Run Code</Button>
                            <Button className="bg-green-700 hover:bg-green-400 mx-auto w-[49%] flex md:static">Submit Code</Button>

                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="output">Output</Label>
                            <pre id="output" className="p-2 bg-gray-800 text-white rounded-md overflow-auto h-[300px]">

                                {output}

                            </pre>
                        </div>

                    </div>

                </div>

                <div className="space-y-2">


                    <Label htmlFor="source-code">Source code</Label>

                    <CodeMirror
                        height="100vh"
                        width="100%"
                        value={codeString}
                        onChange={(value) => setCodeString(value)}
                        lang="python"
                    />
                </div>



            </div>
        </div>
    );
}

