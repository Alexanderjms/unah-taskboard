# Animation Patterns

## Fade Slide In

```css
@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Fade In

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Scale In

```css
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

## Slide Up

```css
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Blur In

```css
@keyframes blur-in {
  from {
    opacity: 0;
    filter: blur(8px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}
```
