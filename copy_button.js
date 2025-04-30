function copyCode(id) {
    const codeElement = document.getElementById(id);
        navigator.clipboard.writeText(codeElement.textContent)
                            .then(() => alert('코드가 복사되었습니다!'))
                            .catch(err => alert('복사 실패: ' + err));
}