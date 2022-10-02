import urllib.request
import PyPDF2
import io


def startSum(url):
    request_url = "https://ntrs.nasa.gov/api/citations/19810022822/downloads/19810022822.pdf"
    ftext = {}
    URL = request_url.strip("\"")
    req = urllib.request.Request(URL, headers={'User-Agent' : "Magic Browser"})
    remote_file = urllib.request.urlopen(req).read()
    remote_file_bytes = io.BytesIO(remote_file)
    pdfdoc_remote = PyPDF2.PdfFileReader(remote_file_bytes)


    for i in range(pdfdoc_remote.numPages):
        page= pdfdoc_remote.getPage(i)
        text = page.extractText()
        spt = text.split(" ")
        
        for b in range(len(spt)):
            spt[b] = spt[b].lower()
            if(spt[b].find("conclusions") != -1):
                ftext.update({f"conclusion{i}": f"{text}"})
                
            elif(spt[b].find("abstract") != -1):
                ftext.update({f"abstract{i}":f"{text}"})
        
    return f"{ftext}"