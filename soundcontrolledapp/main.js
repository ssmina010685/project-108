var dog = 0;
var cat = 0;
var lion = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-IxGwkBmw/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        random_number_r = MAth.floor(Math.random()*255)+1;
        random_number_g = MAth.floor(Math.random()*255)+1;
        random_number_b = MAth.floor(Math.random()*255)+1;
        
        document.getElementById("detected").innerHTML = 
        document.getElementById("result_lable").style.color = 'rgb( '+random_number_r+","+random_number_g+","+random_number_b+")"

        document.getElementById("animal_voices").innerHTML = "Detected Voice Ie of - "+results[0].label;
        document.getElementById("animal_voices").style.color = 'rgb( '+random_number_r+","+random_number_g+","+random_number_b+")"
         
        img = document.getElementById("animal_images");

        if(result[0].lable == "Barking"){
            img.src = "https://i.pinimg.com/originals/e1/65/54/e16554be6c45e27e1b578cc1cc7b32f9.gif"
            dog = dog + 1;
        }else if(result[0].lable == "Meouing"){
             img.src = "https://i.gifer.com/NAk7.gif"
            cat = cat + 1;
        }else (result[0].lable == "Roaring"){
            img.src = "https://i.pinimg.com/originals/5e/0f/02/5e0f02142a9a47095ebc1f16266d9459.gif"
            lion = lion + 1;


        }
    
}   