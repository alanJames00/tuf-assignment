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


// @ts-ignore
import {encode, decode} from 'base-64';

export default function Page() {

    const langArray = [ { name: 'C++', id: 54 }, { name: 'Java', id: 62 }, { name: 'Javascript', id: 93 }, { name: 'Python', id: 92 } ];

    console.log(process.env.NEXT_PUBLIC_API_HOST);
    
    // States
    const [username, setUsername] = useState<string>('');
    const [isRunning, setRunning] = useState<boolean>(false);
    const [language, SetLanguage] = useState<any>(langArray[0]);
    const [codeString, setCodeString] = useState<string>('');
    const [stdin, setStdnin] = useState<string>('');
    const [output, setOutput] = useState<string>('your output will appear here');

    // debug info
    console.log('language:', language);
    console.log('codeString:', codeString);
    console.log('stdin:', stdin);
    console.log('username: ', username);
    console.log('output', output);


    async function runCode() {
        try {
            
            setRunning(true);


            // validate username
            if(username == '' || username.length < 3) {
                alert('Length of username should be greater than 3');
                return;
            }

            const reqBody = {
                username: username,
                language: language.id,
                code: encode(codeString),
                stdin: encode(stdin),
            }

            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/run`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
            });

            const respJson = await resp.json();
            console.log(respJson);
            
            console.log(respJson.compile_output);
            // check for compile time error
            if(respJson.compile_output != null) {
                
                console.log('compile error called');
                
                const compileError = decode(respJson.compile_output);
                setOutput(compileError);
            }
            
            else {
                console.log('no issue');


                const stdoutEncoded = respJson.stdout;
                const stdoutDecoded = decode(stdoutEncoded); 
                setOutput(stdoutDecoded);
            }
            
            setRunning(false);
        }
        catch(e) {
            console.error(e);
            alert(e)
            setRunning(false);
        }
    }

    async function submitCode() {

        try {

            setRunning(true);

            const reqBody = {
                username: username,
                language: language.id,
                code: encode(codeString),
                stdin: encode(stdin),
            }

            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
            });

            const respJson = await resp.json();
            console.log(respJson);
            setRunning(false);

            console.log(respJson.compile_output);
            // check for compile time error
            if(respJson.compile_output != null) {
                
                console.log('compile error called');
                
                const compileError = decode(respJson.compile_output);
                setOutput(compileError);
            }
            
            else {
                console.log('no issue');


                const stdoutEncoded = respJson.stdout;
                const stdoutDecoded = decode(stdoutEncoded); 
                setOutput(stdoutDecoded);
            }
        }
        catch(e) {
            console.error(e);
            alert(e);
            setRunning(false);
        }
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

                            <Button className=" mx-auto w-[49%] flex md:static" 
                                    onClick={runCode}
                                    disabled={isRunning}

                                    >{ isRunning ? 'Please Wait...' : 'Run Code'}</Button>
                            <Button className="bg-green-700 hover:bg-green-400 mx-auto w-[49%] flex md:static" 
                                    onClick={submitCode}
                                    disabled={isRunning}

                                    >{ isRunning ? 'Please Wait...' : 'Submit Code'}</Button>

                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="output">Output</Label>

                            <pre id="output" className="p-2 bg-gray-800 text-white rounded-md overflow-auto h-[300px]">

                                {
                                    output.replace(/'/g, '') 
                                }

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

