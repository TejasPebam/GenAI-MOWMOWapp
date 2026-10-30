const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { handleGemini, hardFilterFoods } = require('./lib/gemini-handler');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let foods;
try {
  const data = require('./js/data.js');
  foods = data.foods;
} catch (e) {
  foods = [
    { id:'mm1', name:'Chicken Biryani', price:249, protein:32, calories:520, category:'Biryani', diet:'Non-veg' },
    { id:'mm2', name:'Grilled Chicken Bowl', price:279, protein:38, calories:410, category:'Healthy', diet:'Non-veg' },
    { id:'mm3', name:'Paneer Tikka', price:229, protein:24, calories:360, category:'Paneer', diet:'Veg' },
    { id:'mm4', name:'Veg Fried Rice', price:189, protein:9, calories:430, category:'Fried Rice', diet:'Veg' },
    { id:'mm5', name:'Chicken Burger', price:199, protein:28, calories:540, category:'Burger', diet:'Non-veg' }
  ];
}

app.get('/api/health', (req,res)=>res.json({ok:true,app:'MowMow',backend:'Node.js + Express',geminiConfigured:Boolean(process.env.GEMINI_API_KEY || process.env.AI_API_KEY)}));
app.post('/api/gemini', async (req,res)=>{
  try { const result = await handleGemini(req.body || {}); res.status(result.statusCode).json(result.body); }
  catch (e) { console.error('Gemini route error:', e); res.status(500).json({error:'AI request failed. Check GEMINI_API_KEY and server logs.'}); }
});
app.get('/api/foods', (req,res)=>res.json({count:foods.length,foods}));
app.get('/api/foods/:id',(req,res)=>{
  const food=foods.find(f=>f.id===req.params.id);
  if(!food) return res.status(404).json({error:'Food not found'});
  res.json(food);
});

app.post('/api/recommendations',(req,res)=>{
  const q=String(req.body.query||'').trim().slice(0,500);
  if(!q) return res.status(400).json({error:'Please enter a food request.'});
  const result=hardFilterFoods(foods,q,'recommend',null);
  const recommendations=[...result].sort((a,b)=>Number(b.protein||0)-Number(a.protein||0)).slice(0,5);
  res.json({query:q,recommendations});
});

app.post('/api/orders',(req,res)=>{
  const order={id:'MM'+Date.now(),...req.body,status:'Demo order received',createdAt:new Date().toISOString()};
  res.status(201).json(order);
});

app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'index.html')));
app.listen(PORT,()=>console.log(`MowMow running at http://localhost:${PORT}`));
