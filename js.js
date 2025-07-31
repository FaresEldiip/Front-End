 
function createDiv() {
    var div = document.createElement('div');
    div.textContent = 'New Div!';
    document.getElementById('creationOutput').appendChild(div);
  }

  function createText() {
    var text = document.createTextNode('New Text Node!');
    document.getElementById('creationOutput').appendChild(text);
  }

  function createHTML() {
    document.getElementById('creationOutput').innerHTML += '<p>Created with innerHTML!</p>';
  }

  function clearCreation() {
    document.getElementById('creationOutput').innerHTML = '';
  }


  function addElement() {
    var div = document.createElement('div');
    div.textContent = 'Removable Element';
    document.getElementById('removalOutput').appendChild(div);
  }

  function removeLast() {
    var output = document.getElementById('removalOutput');
    if (output.lastChild) output.lastChild.remove();
  }

  function removeFirst() {
    var output = document.getElementById('removalOutput');
    if (output.firstChild) output.firstChild.remove();
  }

  function clearRemoval() {
    document.getElementById('removalOutput').innerHTML = '';
  }


  function applyInline() {
    document.getElementById('styleOutput').style.color = 'blue';
  }

  function toggleStyledClass() {
    document.getElementById('styleOutput').classList.toggle('styled');
  }

  function getComputed() {
    var computed = window.getComputedStyle(document.getElementById('styleOutput'));
    alert('Computed color: ' + computed.color);
  }

  function resetStyled() {
    var el = document.getElementById('styleOutput');
    el.removeAttribute('style');
    el.classList.remove('styled');
  }


  function setAttr() {
    var input = document.getElementById('attrInput');
    input.setAttribute('data-custom', 'myValue');
    document.getElementById('attrOutput').textContent = 'Attribute set!';
  }

  function getAttr() {
    var input = document.getElementById('attrInput');
    var value = input.getAttribute('data-custom');
    document.getElementById('attrOutput').textContent = 'Attribute: ' + (value || 'None');
  }

  function removeAttr() {
    var input = document.getElementById('attrInput');
    input.removeAttribute('data-custom');
    document.getElementById('attrOutput').textContent = 'Attribute removed!';
  }


  function setInnerHTML() {
    document.getElementById('contentOutput').innerHTML = '<strong>innerHTML content</strong>';
  }

  function setTextContent() {
    document.getElementById('contentOutput').textContent = 'textContent updated!';
  }

  function insertAdjacent() {
    document.getElementById('contentOutput').insertAdjacentHTML('beforeend', '<span> | Inserted</span>');
  }

  function resetContent() {
    document.getElementById('contentOutput').textContent = 'Original content';
  }


  function addEvents() {
    var el = document.getElementById('eventOutput');
    el.addEventListener('click', handleClick);
    el.addEventListener('mouseover', handleOver);
    el.addEventListener('mouseleave', handleLeave);
  }

  function removeEvents() {
    var el = document.getElementById('eventOutput');
    el.removeEventListener('click', handleClick);
    el.removeEventListener('mouseover', handleOver);
    el.removeEventListener('mouseleave', handleLeave);
  }

  function handleClick() {
    alert('Clicked!');
  }

  function handleOver() {
    console.log('Mouse Over');
  }

  function handleLeave() {
    console.log('Mouse Leave');
  }


  function showParent() {
    var el = document.getElementById('traversalOutput');
    alert('Parent: ' + el.parentElement.tagName);
  }

  function showChildren() {
    var el = document.getElementById('traversalOutput');
    var children = Array.from(el.children).map(function(child) {
      return child.textContent;
    });
    alert('Children: ' + children.join(', '));
  }

  function showSibling() {
    var el = document.getElementById('traversalOutput').children[1];
    var sibling = el.nextElementSibling;
    alert('Sibling: ' + (sibling ? sibling.textContent : 'None'));
  }

  function querySelectorDemo() {
    var el = document.getElementById('traversalOutput');
    var found = el.querySelector('div');
    alert('Query Selector found: ' + found.textContent);
  }


  function moveBox() {
    var box = document.getElementById('animationBox');
    var left = parseInt(box.style.left || 0);
    box.style.position = 'relative';
    box.style.left = (left + 10) + 'px';
  }

  function colorBox() {
    var box = document.getElementById('animationBox');
    box.style.background = box.style.background === 'blue' ? 'red' : 'blue';
  }

  function transformBox() {
    var box = document.getElementById('animationBox');
    box.style.transform = 'rotate(45deg)';
  }

  function stopBox() {
    var box = document.getElementById('animationBox');
    box.style = 'width: 50px; height: 50px; background: red; position: relative;';
  }


  function addHighlight() {
    var el = document.getElementById('classOutput');
    el.classList.add('highlight');
  }

  function removeHighlight() {
    var el = document.getElementById('classOutput');
    el.classList.remove('highlight');
  }

  function toggleHighlight() {
    var el = document.getElementById('classOutput');
    el.classList.toggle('highlight');
  }

  function replaceHighlight() {
    var el = document.getElementById('classOutput');
    el.classList.replace('highlight', 'styled');
  }


  function fillForm() {
    var input = document.getElementById('formInput');
    var select = document.getElementById('formSelect');
    input.value = 'Hello';
    select.value = 'Blue';
    document.getElementById('formOutput').textContent = 'Filled: ' + input.value + ' | ' + select.value;
  }

  function getForm() {
    var input = document.getElementById('formInput').value;
    var select = document.getElementById('formSelect').value;
    document.getElementById('formOutput').textContent = 'Input: ' + input + ' | Select: ' + select;
  }

  function resetForm() {
    document.getElementById('formInput').value = '';
    document.getElementById('formSelect').value = 'Red';
    document.getElementById('formOutput').textContent = '';
  }


  function storeItem() {
    var val = document.getElementById('storageInput').value;
    localStorage.setItem('myKey', val);
    document.getElementById('storageOutput').textContent = 'Stored: ' + val;
  }

  function getItem() {
    var val = localStorage.getItem('myKey');
    document.getElementById('storageOutput').textContent = 'Value: ' + (val || 'None');
  }

  function storeObj() {
    var obj = { name: 'Test', value: 123 };
    localStorage.setItem('myObj', JSON.stringify(obj));
    document.getElementById('storageOutput').textContent = 'Stored Object!';
  }

  function clearStorage() {
    localStorage.clear();
    document.getElementById('storageOutput').textContent = 'Storage Cleared!';
  }


  function cloneBox() {
    var el = document.getElementById('advancedOutput');
    var clone = el.cloneNode(true);
    document.getElementById('cloneOutput').appendChild(clone);
  }

  function templateBox() {
    var template = document.createElement('template');
    template.innerHTML = '<div>Template Content</div>';
    document.getElementById('cloneOutput').appendChild(template.content.cloneNode(true));
  }

  function observeBox() {
    var target = document.getElementById('advancedOutput');
    var observer = new MutationObserver(function() {
      document.getElementById('cloneOutput').textContent = 'Observer detected change!';
    });
    observer.observe(target, { childList: true, subtree: true });
    setTimeout(function() {
      target.textContent = 'Modified!';
      observer.disconnect();
    }, 2000);
  }